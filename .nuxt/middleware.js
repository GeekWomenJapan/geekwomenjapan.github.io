const middleware = {}

middleware['i18n'] = require('@/middleware/i18n.js');
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

export default middleware
