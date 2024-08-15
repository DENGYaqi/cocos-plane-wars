System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Collider2D, Contact2DType, v2, RigidBody2D, _dec, _class, _crd, ccclass, property, BirdCtrl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      v2 = _cc.v2;
      RigidBody2D = _cc.RigidBody2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3840rVLW9HlYdQ1YqZc1uZ", "BirdCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BirdCtrl", BirdCtrl = (_dec = ccclass('BirdCtrl'), _dec(_class = class BirdCtrl extends Component {
        onLoad() {
          // 检测小鸟碰撞
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        start() {}

        update(deltaTime) {}

        fly() {
          this.node.getComponent(RigidBody2D).linearVelocity = v2(0, 6);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // this.node.getComponent(Animation).stop();
          console.log(selfCollider.tag, otherCollider.tag);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=124ab8772503a0966391ce4d0f837d851e56305e.js.map