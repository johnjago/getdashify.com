+++
title = 'Filtered order pagination'
slug = 'filtered-order-pagination'
date = '2024-03-27'
draft = false
version = '1.2.0'
+++

### New features ⭐️

- **Paginate to the next order of the same status!** If an order status is selected in the order list and you click into an order, the order status filter is taken into account when using the next and previous order buttons. It will jump to the next or previous order of the same order status, allowing you to, for example, handle “Payment pending” orders one at a time. You can clear this filter at any time from the order view.

### Improvements ✨

- The order date and time is entirely localized, including aspects like whether it should show AM/PM or use a 24-hour clock.

### Bug fixes 🐞

- The order time was off by some hours if the WordPress time zone setting was set to anything other than UTC. Now, as long as the viewer of the order date/time is in the same time zone as the WordPress setting, it will show the correct formatted time for their region.
- K/J shortcuts going past the last/first order.
- A few JavaScript errors about null elements.
