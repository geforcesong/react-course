"use strict";
exports.__esModule = true;
exports.NavBar = void 0;
var react_1 = require("react");
var NavBar = function () {
    var _a = (0, react_1.useState)(false), mobileMenuStatus = _a[0], setMobileMenuStatus = _a[1];
    console.log(Hello1);
    var menus = (0, react_1.useMemo)(function () { return [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'About',
            subMenus: [
                { text: 'Demo', link: '/demo' },
                { text: 'Contact', link: '/contact' },
                { text: 'License', link: '/license' },
            ]
        },
        {
            text: 'Demos',
            subMenus: [
                { text: 'Countries', link: '/countries' },
                { text: 'Calculator', link: '/helloworld' },
            ]
        },
        {
            text: 'Services',
            link: '/services'
        },
    ]; }, []);
    var handleMobileClick = function () {
        setMobileMenuStatus(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("nav", { className: 'bg-white shadow-md font-semibold' },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: 'flex justify-between bg-black' },
                react_1["default"].createElement("div", { className: 'flex' },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("a", { href: '#', className: 'flex items-center py-4 px-2' },
                            react_1["default"].createElement("span", { className: 'text-white text-lg' }, "React Course"))),
                    react_1["default"].createElement("div", { className: 'hidden md:flex items-center' }, menus.map(function (menu) {
                        if (!menu.subMenus || !menu.subMenus.length) {
                            return (react_1["default"].createElement("a", { key: menu.text, href: menu.link, className: 'py-4 px-2 text-gray-100 hover:text-white hover:bg-green-500' }, menu.text));
                        }
                        return (react_1["default"].createElement("div", { key: menu.text, className: 'group relative py-4 px-2 text-gray-100 hover:text-white hover:bg-green-500' },
                            react_1["default"].createElement("button", null, menu.text),
                            react_1["default"].createElement("div", { className: 'hidden flex-col group-hover:flex text-white bg-black absolute py-1 px-1 top-[55px] left-[0px]' }, menu.subMenus.map(function (sm) {
                                return (react_1["default"].createElement("div", { className: 'py-1 px-2 hover:bg-green-500', key: sm.text },
                                    react_1["default"].createElement("a", { href: sm.link, className: 'text-white ' }, sm.text)));
                            }))));
                    }))),
                react_1["default"].createElement("div", { className: 'hidden md:flex items-center space-x-3 ' },
                    react_1["default"].createElement("a", { href: '', className: 'py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300' }, "Log In"),
                    react_1["default"].createElement("a", { href: '', className: 'py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300' }, "Sign Up")),
                react_1["default"].createElement("div", { className: 'md:hidden flex items-center' },
                    react_1["default"].createElement("button", { className: 'outline-none mobile-menu-button', onClick: handleMobileClick },
                        react_1["default"].createElement("i", { className: "".concat(mobileMenuStatus ? 'icon-close' : 'icon-view-list', " text-white text-xl mr-2") }))))),
        mobileMenuStatus && (react_1["default"].createElement("div", { className: 'mobile-menu' },
            react_1["default"].createElement("ul", { className: '' }, menus.map(function (menu) {
                var _a;
                return (react_1["default"].createElement("li", { key: menu.text },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("a", { href: menu.link, className: 'block text-sm px-2 py-2' }, menu.text),
                        ((_a = menu.subMenus) === null || _a === void 0 ? void 0 : _a.length) &&
                            menu.subMenus.map(function (subMenu) {
                                return (react_1["default"].createElement("a", { key: subMenu.text, href: subMenu.link, className: 'block text-sm pl-8 py-2 ' }, subMenu.text));
                            }))));
            }))))));
};
exports.NavBar = NavBar;
