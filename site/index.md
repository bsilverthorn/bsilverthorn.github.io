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

⌂ It's my home page. 

### Bio-blurb

I'm interested in most anything related to building software or leading teams.

After a PhD in AI/ML, I cofounded [a fintech company](https://techcrunch.com/2015/10/23/angaza-raises-4m-to-make-clean-energy-affordable-for-worlds-poorest/) to do something totally different: make life-changing technologies—especially solar energy and smartphones—radically more affordable for rural families in sub-Saharan Africa and beyond.

Angaza has helped millions of off-grid households connect to electricity and the internet. After leading engineering and product as CTO for 10 years, I replaced myself (and also welcomed Child #1!) in 2022.

These days I'm focused on AI again. You can read a few [early thoughts](/posts/2023-01-ai-product-landscape/).

### Getting in touch

Choose your network:

<font-awesome-icon icon="fa-brands fa-linkedin" />[ / bsilverthorn](https://linkedin.com/in/bsilverthorn/)

<br> 

<font-awesome-icon icon="fa-brands fa-square-twitter" />[ / bcsilverthorn](https://twitter.com/bcsilverthorn/)

<br> 

<font-awesome-icon icon="fa-brands fa-square-github"></font-awesome-icon>[ / bsilverthorn](https://github.com/bsilverthorn/)
