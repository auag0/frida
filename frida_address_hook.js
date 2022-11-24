var libName = "libGame.so"

var baseAddr = Module.findBaseAddress(libName)
Interceptor.attach(baseAddr.add(0x000000), {
    onEnter: function (args) {
        console.log("onEnter");
    },
    onLeave: function(ret){
        console.log("onLeave")
    }
})