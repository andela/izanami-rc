import { registerComponent } from "/imports/plugins/core/layout/lib/components";

import "./templates/details/detail.html";
import "./templates/details/detail.js";

import "./templates/list/items.html";
import "./templates/list/items.js";
import "./templates/list/ordersList.html";
import "./templates/list/ordersList.js";
import "./templates/list/pdf.html";
import "./templates/list/pdf.js";
import "./templates/list/summary.html";
import "./templates/list/summary.js";

import "./templates/orderPage/details.html";
import "./templates/orderPage/details.js";
import "./templates/orderPage/orderPage.html";
import "./templates/orderPage/orderPage.js";

import "./templates/social/orderSocial.html";

import "./templates/workflow/orderCompleted.html";
import "./templates/workflow/orderSummary.html";
import "./templates/workflow/shippingInvoice.html";
import "./templates/workflow/shippingInvoice.js";
import "./templates/workflow/shippingSummary.html";
import "./templates/workflow/shippingSummary.js";
import "./templates/workflow/shippingTracking.html";
import "./templates/workflow/shippingTracking.js";
import "./templates/workflow/workflow.html";
import "./templates/workflow/workflow.js";
import "./templates/workflow/cancelOrder.html";
import "./templates/workflow/cancelOrder.js";

import "./templates/orders.html";
import "./templates/orders.js";

import OrdersActionContainer from "./containers/ordersActionContainer";

// Register PDP components and some others
registerComponent({
  name: "orders_ActionDashboard",
  component: OrdersActionContainer
});
