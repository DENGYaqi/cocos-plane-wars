System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CCBoolean, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BackgroundCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCBoolean = _cc.CCBoolean;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "276a4IYbF1C6rK3u/ikBHcN", "BackgroundCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BackgroundCtrl", BackgroundCtrl = (_dec = ccclass("BackgroundCtrl"), _dec2 = property(CCBoolean), _dec(_class = (_class2 = class BackgroundCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "symbol", _descriptor, this);
        }

        start() {}

        update(deltaTime) {
          if (this.symbol) {
            for (var bgItem of this.node.children) {
              bgItem.setPosition(bgItem.getPosition().x, bgItem.getPosition().y - 150 * deltaTime);

              if (bgItem.getPosition().y <= -430) {
                bgItem.setPosition(bgItem.getPosition().x, bgItem.getPosition().y + 1704);
              }
            }
          }
        }

        restart() {
          this.symbol = false;
        }

        pause() {
          this.symbol = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbol", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5888531da4cad115a7f4aba3d92dcdd13d695f63.js.map