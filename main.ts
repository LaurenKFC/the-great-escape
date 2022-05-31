scene.setBackgroundColor(11)
tiles.setCurrentTilemap(tilemap`level2`)
let Clover = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f d d d d f f . . . . 
    . . . f d d d f f d d d f . . . 
    . . f f d f d 6 7 d f d f f . . 
    . . f f f 6 d 6 7 f 6 d f f . . 
    . . f d 6 f 7 f f 7 f 6 d f . . 
    . . f f f 7 7 d d 6 7 f f f . . 
    . f f d f 7 f d d f 6 f d f f . 
    . f d d f f d d d d f d d d f . 
    . . f d d d d d d d d d d f . . 
    . . . f d d d d d d d d f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . e d f 6 7 6 7 6 7 f d 4 . . 
    . . e e f 7 6 7 6 7 6 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Clover)
Clover.sayText("Lets find the End of the Maze!", 5000, true)
scene.cameraFollowSprite(Clover)
Clover.setStayInScreen(true)
animation.runImageAnimation(
Clover,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f d d d d f f . . . . 
    . . . f d d d f f d d d f . . . 
    . . f f f f f 7 7 f f f f f . . 
    . . f f d 7 d 7 7 d 7 d f f . . 
    . . f d 7 f 7 f f 7 f 7 d f . . 
    . . f f f 7 7 d d 7 7 f f f . . 
    . f f d f 7 f d d f 7 f d f f . 
    . f d d f f d d d d f d d d f . 
    . . f d d d d d d d d d d f . . 
    . . . f d d d d d d d d f . . . 
    . . e e f f f f f f f f e e . . 
    . . e d f 7 7 7 7 7 7 f d e . . 
    . . e e f 6 6 6 6 6 6 f e e . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f d d d d f f . . . . 
    . . . f d d d f f d d d f . . . 
    . . . f f f f 7 7 f f f f . . . 
    . . f f d 7 d 7 7 d 7 d f f . . 
    . . f d 7 f 7 f f f 7 f d f . . 
    . . f f f 7 f d d 7 7 f f f . . 
    . . f d 7 f f d d 7 f d d f . . 
    . f f d f f d d d f d d d f f . 
    . f f d d d d d d d d d d f f . 
    . . . f d d d d d d d d f . . . 
    . . . e f f f f f f f f e e . . 
    . . . e f 7 7 7 7 7 e d d e . . 
    . . . e f f f f f f e e e . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f d d d d f f . . . . 
    . . . f d d d f f d d d f . . . 
    . . f f f f f 7 7 f f f f f . . 
    . . f f d 7 d 7 7 d 7 d f f . . 
    . . f d 7 f 7 f f 7 f 7 d f . . 
    . . f f f 7 7 d d 7 7 f f f . . 
    . f f d f 7 f d d f 7 f d f f . 
    . f d d f f d d d d f d d d f . 
    . . f d d d d d d d d d d f . . 
    . . . f d d d d d d d d f . . . 
    . . e e f f f f f f f f e e . . 
    . . e d f 7 7 7 7 7 7 f d e . . 
    . . e e f 6 6 6 6 6 6 f e e . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f d d d d f f . . . . 
    . . . f d d d f f d d d f . . . 
    . . . f f f f 7 7 f f f f . . . 
    . . f f d 7 d 7 7 d 7 d f f . . 
    . . f d f 7 f f f 7 f 7 d f . . 
    . . f f f 7 7 d d f 7 f f f . . 
    . . f d d f 7 d d f f 7 d f . . 
    . f f d d d f d d d f 7 d f f . 
    . f f d d d d d d d d d d f f . 
    . . . f d d d d d d d d f . . . 
    . . e e f f f f f f f f e . . . 
    . . e d d e 7 7 7 7 7 f e . . . 
    . . . e e e f f f f f f e . . . 
    . . . . . . . . . f f f . . . . 
    `],
1000,
true
)
