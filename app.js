// SPDX-License-Identifier: GPL-3.0-only
(() => {
  'use strict';
  const languages = ['zh-CN', 'zh-TW', 'en'];
  const copy = {
    'zh-CN': {
      title:'Joydivisor · 个人作品',skip:'跳转到作品',nav:'主导航',work:'作品',about:'关于',language:'选择语言',
      headline1:'把好奇心，',headline2:'写成作品。',intro:'这里收录我的开源项目。欢迎打开、探索，也欢迎一起把它们做得更好。',viewWork:'看看我的作品',selectedWork:'精选作品',
      openAtlas:'打开欧陆纪年地图',mapAlt:'公元1200年的欧洲历史地图，展示各政权、城市、河流与海域',mapCaption:'一张地图，穿越两千余年',
      projectType:'交互历史舆图',projectTitle:'欧陆纪年',projectDescription:'拖动时间，展开欧洲的历史疆域。走进一座城，读懂一段往事，或沿着历史人物的足迹远行。',timespan:'公元前 500 — 2024 年',languages:'简中 · 繁中 · English',explore:'打开地图',source:'查看源码',projectNote:'历史条目附来源 · 地图与内容皆可探索',
      aboutText:'这里集中展示我的项目与开源代码。最新源码、更新记录与讨论，都可以在 GitHub 找到。',visitGithub:'在 GitHub 上找到我',siteSource:'主页源码',backTop:'回到顶部',
      description:'Joydivisor 的个人作品主页。探索欧陆纪年 Europa Chronica，一幅跨越古典时代至现代的开源欧洲历史交互地图。'
    },
    'zh-TW': {
      title:'Joydivisor · 個人作品',skip:'跳轉到作品',nav:'主導覽',work:'作品',about:'關於',language:'選擇語言',
      headline1:'把好奇心，',headline2:'寫成作品。',intro:'這裡收錄我的開源專案。歡迎打開、探索，也歡迎一起把它們做得更好。',viewWork:'看看我的作品',selectedWork:'精選作品',
      openAtlas:'打開歐陸紀年地圖',mapAlt:'公元1200年的歐洲歷史地圖，展示各政權、城市、河流與海域',mapCaption:'一張地圖，穿越兩千餘年',
      projectType:'互動歷史輿圖',projectTitle:'歐陸紀年',projectDescription:'拖動時間，展開歐洲的歷史疆域。走進一座城，讀懂一段往事，或沿著歷史人物的足跡遠行。',timespan:'公元前 500 — 2024 年',languages:'簡中 · 繁中 · English',explore:'打開地圖',source:'查看原始碼',projectNote:'歷史條目附來源 · 地圖與內容皆可探索',
      aboutText:'這裡集中展示我的專案與開源程式碼。最新原始碼、更新紀錄與討論，都可以在 GitHub 找到。',visitGithub:'在 GitHub 上找到我',siteSource:'主頁原始碼',backTop:'回到頂部',
      description:'Joydivisor 的個人作品主頁。探索歐陸紀年 Europa Chronica，一幅跨越古典時代至現代的開源歐洲歷史互動地圖。'
    },
    en: {
      title:'Joydivisor · Personal Works',skip:'Skip to projects',nav:'Main navigation',work:'Work',about:'About',language:'Choose language',
      headline1:'A little curiosity.',headline2:'A world to make.',intro:'A collection of my open-source projects. Take a look around, explore, and help them grow.',viewWork:'Explore my work',selectedWork:'Selected work',
      openAtlas:'Open Europa Chronica',mapAlt:'A historical map of Europe in 1200 showing political territories, cities, rivers and seas',mapCaption:'One map. More than two millennia.',
      projectType:'INTERACTIVE HISTORICAL ATLAS',projectTitle:'Europa Chronica',projectDescription:'Move through time and explore the changing territories of Europe. Step into a city, uncover its stories, or follow the journeys of historical figures.',timespan:'500 BCE — 2024 CE',languages:'简中 · 繁中 · English',explore:'Explore the atlas',source:'View source',projectNote:'Sourced histories · An atlas made for exploration',
      aboutText:'This is a home for my projects and open-source work. Find the latest code, updates and conversations on GitHub.',visitGithub:'Find me on GitHub',siteSource:'Site source',backTop:'Back to top',
      description:'The personal portfolio of Joydivisor. Explore Europa Chronica, an open-source interactive historical atlas of Europe from antiquity to modern times.'
    }
  };
  function setLanguage(locale, persist = true) {
    if (!languages.includes(locale)) locale = 'zh-CN';
    const strings = copy[locale];
    document.documentElement.lang = locale;
    document.title = strings.title;
    document.querySelector('meta[name="description"]').content = strings.description;
    document.querySelector('meta[property="og:title"]').content = strings.title;
    document.querySelector('meta[property="og:description"]').content = strings.description;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = strings[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', strings[el.dataset.i18nAria]); });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = strings[el.dataset.i18nAlt]; });
    document.querySelectorAll('[data-lang]').forEach(el => { el.setAttribute('aria-pressed', String(el.dataset.lang === locale)); });
    document.querySelector('.language-switch').style.setProperty('--language', languages.indexOf(locale));
    document.querySelectorAll('[data-atlas]').forEach(el => { el.href = `/europa-chronica/?lang=${locale}`; });
    if (persist) {
      try { localStorage.setItem('joydivisor-language', locale); } catch {}
      const url = new URL(location.href); url.searchParams.set('lang', locale); history.replaceState(null, '', url);
    }
  }
  const switcher = document.querySelector('.language-switch');
  switcher.addEventListener('click', e => { const button = e.target.closest('[data-lang]'); if (button) setLanguage(button.dataset.lang); });
  switcher.addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    const current = languages.indexOf(document.documentElement.lang);
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? 2 : (current + (e.key === 'ArrowRight' ? 1 : -1) + 3) % 3;
    setLanguage(languages[next]); switcher.querySelector(`[data-lang="${languages[next]}"]`).focus();
  });
  let preferred;
  try { preferred = localStorage.getItem('joydivisor-language'); } catch {}
  setLanguage(new URL(location.href).searchParams.get('lang') || preferred || 'zh-CN', false);
})();
