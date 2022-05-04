let object = { x: 2 }
console.log("x" in object)
if ("x" in object) {
    delete (object.x0)
}
console.log("x" in object)
