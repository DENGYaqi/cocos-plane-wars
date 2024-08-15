System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, resources, SpriteFrame, Sprite, CCInteger, v3, CCBoolean, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, EnemyCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      CCInteger = _cc.CCInteger;
      v3 = _cc.v3;
      CCBoolean = _cc.CCBoolean;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea6a54at1lJ5bM0b7SkEIv0", "EnemyCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator); // 敌人

      _export("EnemyCtrl", EnemyCtrl = (_dec = ccclass("EnemyCtrl"), _dec2 = property(CCInteger), _dec3 = property(CCBoolean), _dec(_class = (_class2 = class EnemyCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "isDestory", _descriptor2, this);
        }

        start() {}

        update(deltaTime) {
          // 移动
          this.node.setWorldPosition(v3(this.node.getWorldPosition().x, this.node.getWorldPosition().y - this.speed * deltaTime)); // 离开屏幕销毁子弹

          if (this.node.getPosition().y < -800) {
            this.node.destroy();
          }
        } // 死亡销毁


        die() {
          if (!this.isDestory) {
            this.isDestory = true;
            resources.load("enemy0_die/spriteFrame", SpriteFrame, (err, data) => {
              if (!err) {
                this.node.getComponent(Sprite).spriteFrame = data;
              } // 300ms后销毁


              setTimeout(() => {
                var _this$node;

                (_this$node = this.node) == null ? void 0 : _this$node.destroy();
              }, 200);
            });
          }
        }

        vectory() {
          resources.load("enemy0_die/spriteFrame", SpriteFrame, (err, data) => {
            if (!err) {
              this.node.getComponent(Sprite).spriteFrame = data;
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 250;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isDestory", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5fb77baf4d0a182133ce8ae2cb18c90e89af730c.js.map