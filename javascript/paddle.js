function Paddle (x,vX, container) {
    this.x = x
    this.velocityX = vX

    this.el = document.createElement('div')
    this.el.classList.add('paddle')
    this.el.style.left = this.x

    container.appendChild(this.el)
}


Paddle.prototype.move = function() {

    if(isPaddleHorizontalCollision(this)) {
        this.velocityX = 0
        return
    }

    this.x += this.velocityX

    //update DOM
    this.el.style.left = this.x
}

function isPaddleHorizontalCollision (paddle) {
    if(paddle.x >= 880 && paddle.velocityX > 0) {
        //collision right
        return true
    }

    if(paddle.x <= 0 && paddle.velocityX < 0){
        //collision left
        return true
    }
    return false
}


Paddle.prototype.movePaddleRight = function () {
    this.velocityX = 5
}
Paddle.prototype.movePaddleLeft = function () {
    this.velocityX = -5
}

Paddle.prototype.stop = function () {
    this.velocityX = 0
}
