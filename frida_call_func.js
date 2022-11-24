var libName = "libGame.so"

var ptr = Module.findBaseAddress(libName).add(0x000000)
var ptr = Module.findExportByName(libName, "eglSwapBuffers")

/*
    1. function pointer
    2. return type
    3. args
    var result = nativeFunc(100, 5)
*/
var nativeFunc = new NativeFunction(ptr, "int", ["int", "int"]);
