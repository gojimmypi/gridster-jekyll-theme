---
layout: post
title: "Jekyll Gridster Migration Notes"
date: 2021-03-28
---

A sample HTML file called [testpage2](./testpage2.html) in the root:

```
---
layout: test_layout
sidebar: false
sitemap: false
---
this is some test page content
{% include test_include.html %}
```

This will deploy to the [./testpage2/]() directory, and NOT `testpage2.html` as one might expect.

Note the layout called `test_layout`: this is found in the [_layouts]() directory and is called [test_layout.html]()
