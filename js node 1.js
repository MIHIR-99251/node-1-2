var event = require ('event')
var em = new EventSource.eventemittem();
em.on('my event',function(data){
    count=0;
    data.foeach(i=>{
    count=count+i;
  });
  console.log(count)
});