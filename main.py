@namespace
class SpriteKind:
    title = SpriteKind.create()

def on_right_pressed():
    controller.move_sprite(ohimesama, 100, 100)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    controller.move_sprite(ohimesama, 100, 100)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_a_pressed():
    music.ba_ding.play()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

ohimesama: Sprite = None
music.ba_ding.play()
title_smile = sprites.create(assets.image("""
    smile
"""), SpriteKind.title)
scene.set_background_color(1)
title_smile.set_position(78, 89)
game.splash("モジャンボ")
title_smile.set_image(assets.image("""
    empty
"""))
ohimesama = sprites.create(assets.image("""
    ohimesama
"""), SpriteKind.player)
unko = sprites.create(assets.image("""
    enemy
"""), SpriteKind.enemy)
ohimesama.x = 10
ohimesama.y = 100
unko.x = 150
unko.y = 100

def on_on_update():
    unko.follow(ohimesama, 100)
    if unko.x == ohimesama.x and unko.y == ohimesama.y:
        ohimesama.destroy()
        ohimesama.start_effect(effects.fire)
        pause(1000)
        game.splash("ゲームオーバー")
        game.reset()
game.on_update(on_on_update)
