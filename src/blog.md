---
layout: "base.njk"
title: NE Bytes Blog
---

{% for post in collections.posts | reverse %}
- <a href="{{ post.data.url }}">{{ post.data.title }}</a>
{% endfor %}
