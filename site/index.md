---
title: Home
---

<script setup>
// enable specific icons we want
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faLinkedin,
    faSquareGithub,
    faSquareBluesky,
    faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin);
library.add(faSquareGithub);
library.add(faSquareBluesky);
library.add(faSquareXTwitter);

// avoid flash of huge icons
import { config } from '@fortawesome/fontawesome-svg-core';
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

// make vue component available
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

⌂ It's a home page. 

### Bio-blurb

I lead multimodal agent training inside Amazon's [AGI SF Lab](https://www.amazon.science/blog/amazon-opens-new-ai-lab-in-san-francisco-focused-on-long-term-research-bets).

Amazon [acquired](https://www.cnbc.com/2024/06/28/amazon-hires-execs-from-ai-startup-adept-and-licenses-its-technology.html) the [Adept AI](https://adept.ai) research team in 2024.

Earlier, after a PhD in AI/ML, I cofounded a [fintech](https://techcrunch.com/2015/10/23/angaza-raises-4m-to-make-clean-energy-affordable-for-worlds-poorest/) to make life-changing technologies—such as solar energy and smartphones—radically more affordable for rural families in sub-Saharan Africa and beyond. Angaza has now helped millions of households connect to electricity and the internet.

### Getting in touch

Choose your network:

<font-awesome-icon icon="fa-brands fa-linkedin" />[ / bsilverthorn](https://linkedin.com/in/bsilverthorn/)

<br> 

<font-awesome-icon icon="fa-brands fa-square-bluesky" />[ / bsilverthorn](https://bsky.app/profile/bsilverthorn.bsky.social)

<br> 

<font-awesome-icon icon="fa-brands fa-square-x-twitter" />[ / bcsilverthorn](https://x.com/bcsilverthorn)

<br> 

<font-awesome-icon icon="fa-brands fa-square-github"></font-awesome-icon>[ / bsilverthorn](https://github.com/bsilverthorn/)
