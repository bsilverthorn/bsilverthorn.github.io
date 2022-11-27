---
title: home
---

<script setup>
// enable specific icons we want
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faLinkedin,
    faSquareGithub,
    faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin);
library.add(faSquareGithub);
library.add(faSquareTwitter);

// avoid flash of huge icons
import { config } from '@fortawesome/fontawesome-svg-core';
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

// make vue component available
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<style>
/* quick hack to hide the navbar */
.VPNav {
    visibility: hidden;
}
</style>

Bryan Silverthorn

<font-awesome-icon icon="fa-brands fa-square-github"></font-awesome-icon>[ / bsilverthorn](https://github.com/bsilverthorn/)

<br> 

<font-awesome-icon icon="fa-brands fa-linkedin" />[ / bsilverthorn](https://linkedin.com/in/bsilverthorn/)

<br> 

<font-awesome-icon icon="fa-brands fa-square-twitter" />[ / bcsilverthorn](https://twitter.com/bcsilverthorn/)
