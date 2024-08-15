System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec2, v2, PhysicsSystem2D, ERaycast2DType, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RayTestCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec2 = _cc.Vec2;
      v2 = _cc.v2;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      ERaycast2DType = _cc.ERaycast2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "752792I07lKIq3ZGOjNn0yi", "RayTestCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RayTestCtrl", RayTestCtrl = (_dec = ccclass('HeroCtrl'), _dec2 = property(Vec2), _dec(_class = (_class2 = class RayTestCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "direct", _descriptor, this);
        }

        onLoad() {
          PhysicsSystem2D.instance.enable = true;
        }

        start() {}

        update(deltaTime) {
          this.node.setPosition(this.node.position.x, this.node.position.y + this.direct.y * 150 * deltaTime);
          var checkRes = PhysicsSystem2D.instance.raycast(this.node.worldPosition, v2(this.node.worldPosition.x, this.node.worldPosition.y + this.direct.y * 100), ERaycast2DType.Closest);

          if (checkRes.length > 0) {
            this.direct.y = this.direct.y * -1;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "direct", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v2(0, 1);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1195cf8a52580b2a49920da5c48a1b8c055d403e.js.map