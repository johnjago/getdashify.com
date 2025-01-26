+++
title = 'Dashify 1.2.10: New order trend graph time options'
slug = '2024-07-15-new-order-graph-time-options'
date = '2024-07-15T15:41:57-05:00'
version = '1.2.10'
+++

This version of Dashify adds new time options to the order trend graphs. 🕑

Now, you can choose between Today, Last 24 hours, 7 days, and 30 days.

Previously, we had an option labeled “Today” that was actually the last 24 hours, leading to confusion. The new “Today” option will only show orders that happened after midnight of the current day.

---

We also fixed a few bugs! 🐞

- **Order trend graphs** — fixed an issue where the time zone offset might cause some orders to be excluded.
- **Order trend graphs** — fixed the graphs showing a blank space instead of a flat line if the value of a metric is 0.
- **Subscriptions** — fixed the add new subscription page missing Dashify styles when HPOS is turned on.
- **Order & subscription lists** — fixed the filters disappearing if 0 orders matched the filter.
