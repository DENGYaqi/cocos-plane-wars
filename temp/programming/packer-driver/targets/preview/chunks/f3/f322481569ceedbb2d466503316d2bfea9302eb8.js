System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v3, CCInteger, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BulletCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
      CCInteger = _cc.CCInteger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab6a5zTzXxHUaMYiqgQmJno", "BulletCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator); // 子弹

      _export("BulletCtrl", BulletCtrl = (_dec = ccclass('BulletCtrl'), _dec2 = property(CCInteger), _dec(_class = (_class2 = class BulletCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);
        }

        start() {}

        update(deltaTime) {
          var _this$node, _this$node2;

          // 移动
          (_this$node = this.node) == null ? void 0 : _this$node.setWorldPosition(v3(this.node.getWorldPosition().x, this.node.getWorldPosition().y + this.speed * deltaTime)); // 离开屏幕销毁子弹

          if (((_this$node2 = this.node) == null ? void 0 : _this$node2.getPosition().y) > 820) {
            var _this$node3;

            (_this$node3 = this.node) == null ? void 0 : _this$node3.destroy();
          }
        } // 碰到敌人销毁子弹


        miss() {
          try {
            var _this$node4;

            (_this$node4 = this.node) == null ? void 0 : _this$node4.destroy();
          } catch (e) {// ..
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 800;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f322481569ceedbb2d466503316d2bfea9302eb8.js.map