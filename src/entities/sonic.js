import k from "../kaplayCtx";
export function makeSonic(pos){
    const sonic = k.add([
        k.sprite("sonic", {anim: "run"}),
        k.scale(4),
        k.area(),

        k.anchor("center"),
        k.pos(pos),
        k.body({jumpForce: 1700}),
        {
            setControls() {
                k.onButtonPress("jump", () => {
                    //if on the platform we made
                    if (this.isGrounded()){
                        //the animation
                        this.play("jump");
                        //the jumping method to actually physically jump. 
                        this.jump()
                        //plays jump sound
                        k.play("jump",{volume: 0.5});
                    }
                });
            },
            setEvents(){
                this.onGround(() => {
                    this.play("run");
                });
            },
        },
    ]);
    return sonic;
} 