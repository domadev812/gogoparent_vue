<template>
  <div class="schedule-list">
    <h1>Scheduled List</h1>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th style="width: 10px;">Schedule Ride ID</th>
          <th style="width: 20px;">Start Date</th>
          <th style="width: 20px;">End Date</th>
          <th style="width: 20px;">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(schedule, index) in schedules" @click="showModal(index)">
          <td>123456</td>
          <td>123456</td>
          <td>123456</td>
          <td>Single</td>
        </tr>
      </tbody>
    </table>
    <b-modal ref="myModalRef" hide-footer title="Scheduled Ride Updater" no-close-on-backdrop>
      <b-form @submit="onSubmit" @reset="onReset">
        <div class="d-block">        
          <section>
            <h6>Scheduled Ride ID</h6>
            <input type = "number" v-model="schedule.scheduledRideId" required></br>
            <h6>Alternate Phone Number</h6>
            <div class = "comment">(If the customer is at a friend's house for example, you can put the friend's home number here and the system will use this number as the contact number)</div>
            <input type = "number" v-model="schedule.riderPhone" required></br>
            <input type = "checkbox" style="margin: 30px 0 10px;" v-model="schedule.callToConfirmSurge" required>if there is surge pricing, call to confirm?*
          </section>
          <section>
            <h6>Where are you going?*</h6>
            <input type = "text" v-model="schedule.rideName" required>
            <h6>Type of Car *</h6>
            <select v-model="schedule.rideType" required>
              <option value = 'none'>None</option>
              <option value = 'bus'>Bus</option>
              <option value = 'car'>Car</option>
            </select>
          </section>
          <section class="single-ride" v-if="schedule.schedule_type === 0">
            <h6>Single Ride</h6>
            <div class = "flex-row margin-top-20">
              <div>
                <div class ="sub-title">Pickup Day*</div>
                <b-form-input type="date" v-model="schedule.pickupDate" required></b-form-input>
              </div>
              <div>
                <div class ="sub-title">Pickup Time*</div>
                <b-form-input type="time" v-model="schedule.pickupTime" required></b-form-input>
              </div>
            </div>
          </section>
          <section class="multi-ride" v-else>
            <h6>Repeated Ride</h6>
            <div class ="sub-title margin-top-20">Pickup Time*</div>
            <b-form-input type="time" style="width: 100px;" v-model="schedule.pickupTime" required></b-form-input>
            <div class = "flex-row margin-top-20">
              <div class ="sub-title">Repeated every:</div><input type="number" style="width: 40px;" v-model="schedule.repeatEveryXWeek" required>&nbsp;&nbsp;weeks
            </div>
            <div class ="sub-title">Repeated on:</div>
            <input class="day" type = "checkbox" v-model="schedule.day0">&nbsp;Sunday</br>
            <input class="day" type = "checkbox" v-model="schedule.day1">&nbsp;Monday</br>
            <input class="day" type = "checkbox" v-model="schedule.day2">&nbsp;Tuesday</br>
            <input class="day" type = "checkbox" v-model="schedule.day3">&nbsp;Wednesday</br>
            <input class="day" type = "checkbox" v-model="schedule.day4">&nbsp;Thursday</br>
            <input class="day" type = "checkbox" v-model="schedule.day5">&nbsp;Friday</br>
            <input class="day" type = "checkbox" v-model="schedule.day6">&nbsp;Saturday</br>
            <div class ="sub-title margin-top-20">Start On*</div>
            <b-form-input type="date" style="width: 200px;" v-model="schedule.startDate" required></b-form-input>
            <div class ="sub-title margin-top-20">Ends On*</div>
            <input type="radio" v-model="schedule.endOn" value="never"><label>Never</label></br>
            <input type="radio" v-model="schedule.endOn" value="occurrences"><label>After</label><input type = "number" v-model="schedule.endAfterXTimes" style="width: 40px;">&nbsp;occurrences
            <div class="flex-row"><input type="radio" v-model="schedule.endOn" value="on"><label style="margin-bottom: 0;">On</label><b-form-input type="date" style="width: 200px;"></b-form-input></div>
          </section>
          <section>
            <h6>Start Address*</h6>
            <div class ="sub-title">Street Address*</div>
            <input type = "text" v-model="schedule.streetAddress1" required>
            <div class = "flex-row margin-top-20">
              <div>
                <div class ="sub-title">City*</div>
                <input type = "text" style="width:150px;" v-model="schedule.city1" required>
              </div>
              <div>
                <div class ="sub-title">State*</div>
                <input type = "text" style="width:70px;" v-model="schedule.state1" required>
              </div>
              <div>
                <div class ="sub-title">Zip*</div>
                <input type = "text" style="width:100px;" v-model="schedule.zip1" required>
              </div>
            </div>
            <h6>End Address*</h6>
            <div class ="sub-title">Street Address*</div>
            <input type = "text" v-model="schedule.streetAddress2" required>
            <div class = "flex-row margin-top-20">
              <div>
                <div class ="sub-title">City*</div>
                <input type = "text" style="width:150px;" v-model="schedule.city2" required>
              </div>
              <div>
                <div class ="sub-title">State*</div>
                <input type = "text" style="width:70px;" v-model="schedule.state2" required>
              </div>
              <div>
                <div class ="sub-title">Zip*</div>
                <input type = "text" style="width:100px;" v-model="schedule.zip2" required>
              </div>
            </div>
          </section>
          <section>
            <div class ="sub-title note">Note to Driver</div>
            <input type = "text" v-model="schedule.noteToDriver">
          </section>
        </div>
        <div class = "button-group">
          <b-button type="submit" variant="primary">Update Scheduled Ride</b-button>
          <b-button variant="danger" type="reset">Reset Form</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ScheduleList',
  data () {
    return {
      schedule: {
        schedule_type: 1,
        scheduledRideId: '',	
        callerId: '',	
        riderPhone: '',	
        rideName: '',	
        rideType: '',	
        rideMultiple: 0,	
        pickupTime: null,
        pickupDate: null,	
        startDate: null,	
        timeZone: null,	
        endAfterXTimes: null,
        endOn: null,	
        day0: null,	
        day1: null,	
        day2: null,	
        day3: null,	
        day4: null,	
        day5: null,	
        day6: null,	
        repeatEveryXWeek: 1,	
        streetAddress1: '',	
        city1: '',	
        state1: '',	
        zip1: '',	
        lat1: 0.0,	
        long1: 0.0,	
        streetAddress2: '',	
        city2: '',	
        state2: '',	
        zip2: '',	
        lat2: 0.0,	
        long2: 0.0,	
        noteToDriver: '',	
        callAttempts: 0,	
        completed: 0,	
        canceled: 0,	
        callToConfirmSurge: true,	
        partnerId: null,	
        customerCostOverride: null,
        dispatchedAt: null,	
        timeStamp: null,	
        updatedAt: null,	
        emailedReminderAt: null
      },
      schedules: []
    }
  },
  created() {
    this.getToken();    
  },
  methods: {
    getToken () {
      this.$store.dispatch('fetchToken', null)
        .then((response) => {  
          this.fetchSchedules()                                   
        }).catch((error) => {              
          console.log('Error', error)    
        }
      )
    },
    fetchSchedules () {
      this.$store.dispatch('fetchSchedules', null)
        .then((response) => {  
          this.schedules = response.schedules.map(schedule => schedule)
        }).catch((error) => {              
          console.log('Error', error)    
        }
      )
    },
    showModal (ind) {
      //TODO: This can be implemented without calling API, Schedules has all schedules now.
      this.$store.dispatch('fetchSchedule', {schedule_id: ind})  //TODO: ind should be id of schedule in real data
        .then((response) => {  
          this.schedule = response.schedule
          this.$refs.myModalRef.show()
        }).catch((error) => {              
          console.log('Error', error)    
        }
      )      
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },
    onSubmit (evt) {
      evt.preventDefault();
      console.log('Submit', this.schedule)
    },
    onReset (evt) {
      console.log('Reset')
    }
  }
}
</script>
<style lang="scss">
  .schedule-list {
    width: 80%;
    margin: auto;   

    .margin-top-20 {
      margin-top: 20px;
    }

    .modal-header {      
      border: 0px;
      
      h5 {
        width: 100%;
      }
    }

    section {
      text-align: left;
      border-top: 1px solid #d0d0d0;    
      padding: 10px 0 30px;  
      select {
        width: 50%;
      }

      label {
        margin-left: 5px;
        margin-right: 5px;
      }

      h6 {
        margin-top: 30px;
        font-weight: bold;
        
        &:nth-child(1) {
          margin-top: 0px;
        }
      }    
      .comment {
        font-size: 13px;
      }

      .sub-title {
        font-size: 14px;
        font-weight: bold;
      }

      .day {
        margin: 10px 0 0 10px;
      }

      .flex-row {
        display: flex;
        width: 80%;        

        div {
          margin-right: 10px;
        }
      } 
    }  
    
    .button-group {
      display: flex;
      justify-content: space-between;
    }       
  }
</style>
