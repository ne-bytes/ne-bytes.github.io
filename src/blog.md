---
layout: "base.njk"
title: NE Bytes Blog
---

{% for post in collections.posts | reverse %}
- <a href="{{ meta.url }}{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}
