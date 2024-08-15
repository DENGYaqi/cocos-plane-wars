System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BirdCtrl, _decorator, Component, Node, CCInteger, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BirdRollSFCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBirdCtrl(extras) {
    _reporterNs.report("BirdCtrl", "./BirdCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      BirdCtrl = _unresolved_2.BirdCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a77271OvPpLYZjArHI4DSlV", "BirdRollSFCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BirdRollSFCtrl", BirdRollSFCtrl = (_dec = ccclass('BirdRollSFCtrl'), _dec2 = property(CCInteger), _dec3 = property(CCInteger), _dec4 = property(_crd && BirdCtrl === void 0 ? (_reportPossibleCrUseOfBirdCtrl({
        error: Error()
      }), BirdCtrl) : BirdCtrl), _dec(_class = (_class2 = class BirdRollSFCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "width", _descriptor2, this);

          _initializerDefineProperty(this, "bird", _descriptor3, this);
        }

        start() {
          for (let item of this.node.children) {
            item.on(Node.EventType.MOUSE_DOWN, () => {
              var _this$bird;

              (_this$bird = this.bird) == null ? void 0 : _this$bird.fly();
            });
          }
        }

        update(deltaTime) {
          for (let item of this.node.children) {
            // 移动 Sprite
            item.setPosition(item.position.x - this.speed * deltaTime, item.position.y); // 重复 Sprite

            if (item.position.x < -this.width) {
              item.setPosition(item.position.x + this.width * 2, item.position.y);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 400;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bird", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=01631967f548819541be6fd852fd2261920702f7.js.map