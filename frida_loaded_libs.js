Process.enumerateModules({
    onMatch: function(module){
        console.log(`${module.name}: ${module.base}`)
    }
})
