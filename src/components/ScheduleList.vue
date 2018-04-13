<template>
  <div class="schedule-list">
    <h1>Scheduled List</h1>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th style="width: 10px;">Schedule Ride ID</th>
          <th style="width: 20px;">Start Date</th>
          <th style="width: 20px;">End Date</th>
          <th style="width: 20px;">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="showModal">
          <td>123456</td>
          <td>123456</td>
          <td>123456</td>
          <td>123456</td>
        </tr>
        <tr>
          <td>123456</td>
          <td>123456</td>
          <td>123456</td>
          <td>123456</td>
        </tr>
        <tr>
          <td>123456</td>
          <td>123456</td>
          <td>123456</td>
          <td>123456</td>
        </tr>
      </tbody>
    </table>
    <b-modal ref="myModalRef" hide-footer title="Scheduled Ride Updater">
      <div class="d-block">
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ScheduleList',
  data () {
    return {

    }
  },
  methods: {
    showModal () {
      console.log('Click')
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
<style lang="scss">
  .schedule-list {
    width: 80%;
    margin: auto;    
    .modal-header {      
      border: 0px;

      h5 {
        width: 100%;
      }
    }
  }
</style>
