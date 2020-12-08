class Pendulum{
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            
        }
        this.chain = Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}