+++
title = 'How to give free shipping above a certain amount in WooCommerce'
slug = 'woocommerce-minimum-amount-for-free-shipping'
summary = 'Learn how to configure your WooCommerce store to give free shipping to customers if they spend over a specific amount, no plugins needed.'
date = 2024-09-04T16:50:22-05:00
+++

{{< rawhtml >}}
<div class="rounded-lg px-8 py-8 bg-[#804D79E3] text-gray-50 text-lg">
	<h2 class="text-gray-50" style="margin-top: 0; margin-bottom: 0.6rem;">Summary</h2>
	<p style="margin-bottom: 0;">Learn how to configure your WooCommerce store to give free shipping to customers if they spend over a specific amount, no plugins needed.</p>
</div>
{{< /rawhtml >}}

1. **Navigate to the shipping settings in WooCommerce**. This can be found in **WooCommerce → Settings → Shipping** from the left side menu. Create a shipping zone if you don’t already have one, and then click **Edit**.

![A screenshot of the WordPress admin. There is an arrow pointing to the Settings link under WooCommerce in the left side menu, and an arrow pointing to Edit next to the single shipping zone on this store. The current settings tab is Shipping.](/blog/woocommerce-minimum-amount-for-free-shipping/free-shipping-min-amount-1.png)

2. Inside that shipping zone, click **Add shipping method**.

![A screenshot of the view to edit a shipping zone. There is an arrow pointing to a button “Add shipping method” in the “Shipping methods” section.](/blog/woocommerce-minimum-amount-for-free-shipping/free-shipping-min-amount-2.png)

3. Choose **Free shipping**, and then click **Continue**.

![A screenshot of the popup that WooCommerce provides to choose a shipping method type. In this image, “Free shipping” is selected. There is an arrow pointing to the Continue button in the bottom right corner of the popup.](/blog/woocommerce-minimum-amount-for-free-shipping/free-shipping-min-amount-3.png)

4. Under **Free shipping requires**, choose **A minimum order amount**. Enter the minimum amount under **Minimum order amount**. Click **Create and save**.

![A screenshot of the next step in the popup after choosing “Free shipping”, which is to configure its settings. There is an arrow pointing to the option “A minimum order amount” selected in a dropdown under “Free shipping requires”, as well as an arrow pointing to the “Create and save” button. Furthermore, there is a dollar amount entered in the input under “Minimum order amount”.](/blog/woocommerce-minimum-amount-for-free-shipping/free-shipping-min-amount-4.png)

Now, when a customer’s cart total is at least the amount you entered in the settings, they will have the option of free shipping.
