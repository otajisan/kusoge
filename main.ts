namespace SpriteKind {
    export const title = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(ohimesama, 100, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(ohimesama, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
})
let ohimesama: Sprite = null
music.baDing.play()
let title_smile = sprites.create(assets.image`smile`, SpriteKind.title)
scene.setBackgroundColor(1)
title_smile.setPosition(78, 89)
game.splash("クソゲー")
title_smile.setImage(assets.image`empty`)
ohimesama = sprites.create(assets.image`ohimesama`, SpriteKind.Player)
let unko = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
ohimesama.x = 10
ohimesama.y = 100
unko.x = 150
unko.y = 100
let score = 0
info.setScore(0)
let is_gameover = false
game.onUpdate(function () {
    unko.follow(ohimesama, 70)
    if (!(is_gameover)) {
        score = score + 1
        info.changeScoreBy(score)
        if (unko.x == ohimesama.x && unko.y == ohimesama.y) {
            is_gameover = true
            info.changeScoreBy(score)
            unko.startEffect(effects.fire, 500)
            pause(1000)
            unko.destroy()
            ohimesama.destroy()
            game.over(false)
            game.reset()
            pause(1000)
        }
    }
})
