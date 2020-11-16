<template>
  <div class="home">
    <b-container fluid>
      <QuriesChart />
      <b-jumbotron>
        <TempTable></TempTable>
      </b-jumbotron>
    </b-container>
  </div>
</template>
<script>
import QuriesChart from '@/components/QuriesChart.vue'
import TempTable from '@/components/TempTable.vue'
export default { components: { QuriesChart, TempTable } }
</script>
