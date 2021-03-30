<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: 'log-table',
  props: {
    currentResult: Array,
    status: Boolean,
    currentDate: String,
    last_result: Object,
    start_time: Object
  },
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'id',
          label: 'ID',
          sortable: true
        },
        {
          key: 'date',
          label: 'Date',
          sortable: true
        },
        {
          key: 'time',
          label: 'Time',
          sortable: true
        },
        {
          key: 'SrcIP',
          label: 'Source IP',
          sortable: true
        },
        {
          key: 'SrcPort',
          label: 'Source Port',
          sortable: true
        },
        {
          key: 'Way',
          label: 'Way',
          sortable: true
        },
        {
          key: 'DestIP',
          label: 'Destination IP',
          sortable: true
        },
        {
          key: 'DestPort',
          label: 'Destination Port',
          sortable: true
        },
        {
          key: 'Protocol',
          label: 'Protocol',
          sortable: true
        },
        {
          key: 'Seq',
          label: 'Seq',
          sortable: true
        },
        {
          key: 'QueryName',
          label: 'Query Name',
          sortable: true
        },
        {
          key: 'QueryClass',
          label: 'Query Class',
          sortable: true
        },
        {
          key: 'QueryType',
          label: 'Query Type',
          sortable: true
        },
        {
          key: 'is_legit',
          label: 'Is Legit',
          sortable: true
        }
      ],
      items: [
        // {
        //   isActive: true,
        //   age: 40,
        //   first_name: 'Dickerson',
        //   last_name: 'Macdonald'
        // },
        // { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        // { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        // { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  watch: {
    currentResult: {
      handler() {
        // console.log(this.items)
        for (var i in this.currentResult){ 
          this.items.push({isActive:true,
                          id : this.currentResult[i]._id,
                          date : this.currentResult[i]._source.timestamp.split(" ")[0],
                          time : this.currentResult[i]._source.timestamp.split(" ")[1],
                          SrcIP : this.currentResult[i]._source.SrcIP,
                          SrcPort : this.currentResult[i]._source.SrcPort,
                          Protocol : this.currentResult[i]._source.Protocol,
                          Way : this.currentResult[i]._source.Way,
                          DestIP : this.currentResult[i]._source.DestIP,
                          DestPort : this.currentResult[i]._source.DestPort,
                          Seq : this.currentResult[i]._source.Seq,
                          QueryName : this.currentResult[i]._source.QueryName,
                          QueryClass : this.currentResult[i]._source.QueryClass,
                          QueryType : this.currentResult[i]._source.QueryType,
                          is_legit : this.currentResult[i]._source.is_legit
                        }
          )
        }
      }
    },
    last_result: {
      handler() {
        if (this.status) {
          this.items.push({isActive:true,
                  id : this.last_result._id,
                  date : this.last_result._source.timestamp.split(" ")[0],
                  time : this.last_result._source.timestamp.split(" ")[1],
                  SrcIP : this.last_result._source.SrcIP,
                  SrcPort : this.last_result._source.SrcPort,
                  Protocol : this.last_result._source.Protocol,
                  Way : this.last_result._source.Way,
                  DestIP : this.last_result._source.DestIP,
                  DestPort : this.last_result._source.DestPort,
                  Seq : this.last_result._source.Seq,
                  QueryName : this.last_result._source.QueryName,
                  QueryClass : this.last_result._source.QueryClass,
                  QueryType : this.last_result._source.QueryType,
                  is_legit : this.last_result._source.is_legit
                })
        }
      }
    }
  }
}
</script>
