+++
title = 'Automatically trash pending orders in WooCommerce'
slug = 'auto-trash-pending-orders-woocommerce'
summary = 'This short tutorial describes how to automatically move orders left in “Payment pending” status to the trash after a certain amount of time. No custom code or plugins required.'
date = 2024-05-20T07:37:05-05:00
draft = false
+++

{{< rawhtml >}}
<div class="rounded-lg px-8 py-8 bg-[#9D6095E3] text-gray-50 text-lg">
	<h2 class="text-gray-50" style="margin-top: 0; margin-bottom: 0.6rem;">Summary</h2>
	<p style="margin-bottom: 0;">This short tutorial describes how to automatically move orders left in “Payment pending” status to the trash after a certain amount of time. No custom code or plugins required.</p>
</div>
{{< /rawhtml >}}

***

In WooCommerce, it’s possible to delete pending orders, which are unpaid and likely abandoned, after a given amount of time to help keep your order list clean. The steps below show you how to enable this.

1. From the WordPress dashboard, navigate to **WooCommerce → Settings** in the left sidebar.
2. Open the “**Accounts & Privacy**” tab.

![Screenshot of the WooCommerce settings page, with arrows pointing to the sidebar where to get to the settings, and then pointing to the Accounts & Privacy tab.](/blog/auto-trash-pending-orders-woocommerce/auto-trash-pending-orders-1.webp)

3. Scroll to the bottom and find where it says “**Retain pending orders**”.
4. You can set the amount of time after which a pending order will be deleted. For example, I set it to 7 days.

![Screenshot of the bottom of the Accounts & Privacy WooCommerce settings page, where there is an option to choose the amount of time before a pending order is deleted.](/blog/auto-trash-pending-orders-woocommerce/auto-trash-pending-orders-2.webp)

## Keep in mind

Sometimes, there may have been an issue, and the customer will retry later. Depending on how much time has passed, WooCommerce may consider it the same order, and it will update the existing order that has been created. This gives you a complete history of the customer’s activity.

You may also want to send follow ups to see if the customer experienced some issue checking out, before deleting the order.

With those two considerations, you may want to set the order trash time to be not too short.

## Trashed orders can be recovered

If you’re wondering if the automatically deleted orders can be recovered, the answer is yes! They can be found in the **Trash** tab of the WooCommerce orders page.
