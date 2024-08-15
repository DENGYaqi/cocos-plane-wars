System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BackgroundCtrl, BulletCtrl, EnemyCtrl, _decorator, Component, Node, UITransform, v3, Prefab, instantiate, PhysicsSystem2D, Contact2DType, resources, SpriteFrame, Sprite, find, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PlayerCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBackgroundCtrl(extras) {
    _reporterNs.report("BackgroundCtrl", "./BackgroundCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletCtrl(extras) {
    _reporterNs.report("BulletCtrl", "./BulletCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyCtrl(extras) {
    _reporterNs.report("EnemyCtrl", "./EnemyCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Contact2DType = _cc.Contact2DType;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      find = _cc.find;
    }, function (_unresolved_2) {
      BackgroundCtrl = _unresolved_2.BackgroundCtrl;
    }, function (_unresolved_3) {
      BulletCtrl = _unresolved_3.BulletCtrl;
    }, function (_unresolved_4) {
      EnemyCtrl = _unresolved_4.EnemyCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "999ccRxXOxKSKNKiQSiP2Wq", "PlayerCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator); // 飞机模型

      _export("PlayerCtrl", PlayerCtrl = (_dec = ccclass("PlayerCtrl"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class PlayerCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bulletPrefab", _descriptor, this);

          _initializerDefineProperty(this, "enemyPrefab", _descriptor2, this);
        }

        onLoad() {
          var _PhysicsSystem2D$inst;

          // 注册全局碰撞回调函数
          (_PhysicsSystem2D$inst = PhysicsSystem2D.instance) == null ? void 0 : _PhysicsSystem2D$inst.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 子弹和敌人碰撞
          if (selfCollider.tag === 0 && otherCollider.tag === 1 || selfCollider.tag === 1 && otherCollider.tag === 0) {
            selfCollider.tag === 0 ? selfCollider.getComponent(_crd && BulletCtrl === void 0 ? (_reportPossibleCrUseOfBulletCtrl({
              error: Error()
            }), BulletCtrl) : BulletCtrl).miss() : selfCollider.getComponent(_crd && EnemyCtrl === void 0 ? (_reportPossibleCrUseOfEnemyCtrl({
              error: Error()
            }), EnemyCtrl) : EnemyCtrl).die();
            otherCollider.tag === 1 ? otherCollider.getComponent(_crd && EnemyCtrl === void 0 ? (_reportPossibleCrUseOfEnemyCtrl({
              error: Error()
            }), EnemyCtrl) : EnemyCtrl).die() : otherCollider.getComponent(_crd && BulletCtrl === void 0 ? (_reportPossibleCrUseOfBulletCtrl({
              error: Error()
            }), BulletCtrl) : BulletCtrl).miss();
          } // 敌人和英雄碰撞


          if (selfCollider.tag === 1 && otherCollider.tag === 2 && !selfCollider.getComponent(_crd && EnemyCtrl === void 0 ? (_reportPossibleCrUseOfEnemyCtrl({
            error: Error()
          }), EnemyCtrl) : EnemyCtrl).isDestory || selfCollider.tag === 2 && otherCollider.tag === 1 && !otherCollider.getComponent(_crd && EnemyCtrl === void 0 ? (_reportPossibleCrUseOfEnemyCtrl({
            error: Error()
          }), EnemyCtrl) : EnemyCtrl).isDestory) {
            var _find$getComponent;

            (_find$getComponent = find("Canvas/bg").getComponent(_crd && BackgroundCtrl === void 0 ? (_reportPossibleCrUseOfBackgroundCtrl({
              error: Error()
            }), BackgroundCtrl) : BackgroundCtrl)) == null ? void 0 : _find$getComponent.pause();
            selfCollider.tag === 1 ? selfCollider.getComponent(_crd && EnemyCtrl === void 0 ? (_reportPossibleCrUseOfEnemyCtrl({
              error: Error()
            }), EnemyCtrl) : EnemyCtrl).vectory() : otherCollider.getComponent(_crd && EnemyCtrl === void 0 ? (_reportPossibleCrUseOfEnemyCtrl({
              error: Error()
            }), EnemyCtrl) : EnemyCtrl).vectory();
            this.lose();
          }
        }

        start() {
          var uiTrans = this.node.getComponent(UITransform);
          this.node.on(Node.EventType.TOUCH_MOVE, touch => {
            this.node.setWorldPosition(v3(touch.getUILocation().x, touch.getUILocation().y));
          }); // 计时器

          this.schedule(() => {
            var aNumber = 175 * Math.random() + 1;
            var xPos = Math.floor(aNumber);
            var symbol = Math.random() > 0.5;

            if (!symbol && xPos !== 0) {
              xPos = -xPos;
            }

            var enemy = instantiate(this.enemyPrefab);
            enemy.setParent(this.node.parent);
            enemy.setPosition(xPos, 420);
          }, 0.5); // 计时器

          this.schedule(() => {
            var bullet = instantiate(this.bulletPrefab);
            bullet.setParent(this.node.parent);
            bullet.setPosition(this.node.getPosition().x, this.node.getPosition().y + 80);
          }, 0.1);
        }

        update(deltaTime) {}

        lose() {
          // 暂停所有计时器
          this.unscheduleAllCallbacks();
          resources.load("hero1_die/spriteFrame", SpriteFrame, (err, data) => {
            if (!err) {
              this.node.getComponent(Sprite).spriteFrame = data;
            }
          });
        }

        onDestroy() {
          this.node.destroy(); // 暂停所有计时器

          this.unscheduleAllCallbacks();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae0a21b01ebd62307eb69a02c7f879340514cafc.js.map