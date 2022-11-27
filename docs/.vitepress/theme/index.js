import DefaultTheme from 'vitepress/theme';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faLinkedin,
    faSquareGithub,
    faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);

    library.add(faLinkedin);
    library.add(faSquareGithub);
    library.add(faSquareTwitter);

    ctx.app.component('FontAwesomeIcon', FontAwesomeIcon);
  },
}
