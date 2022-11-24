var libName = "libGame.so"

Interceptor.attach(Module.findExportByName(libName, "eglSwapBuffers"), {
    onEnter: function (args) {
        console.log("onEnter")
    },
    onLeave: function(ret){
        console.log("onLeave")
    }
})