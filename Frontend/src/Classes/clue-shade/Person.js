export default class PersonModel {
    constructor(modelFile, animationName, leftPos, rightPos, scale = 1, rotationY = 0, animationTimescale = 1) {
        this.modelFile = modelFile; // string : 'person.glb' - name of glb file in public/models folder
        this.animationName = animationName; // string : 'mixamo.com' - name of animation in glb file | use: animation.actions[this.animationName]
        this.leftPos = leftPos;  // int-array: [x, y, z] - used if model is standing at left
        this.rightPos = rightPos; // int-array: [x, y, z] - used if model is standing at right
        this.scale = scale; // float : 1 - scale of model
        this.rotationY = rotationY; // float : 0 - rotation of model in y axis
        this.animationTimescale = animationTimescale; // float : 1 - timescale of animation
    }
}