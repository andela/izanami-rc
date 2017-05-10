import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "PerformanceAnalytics",
  name: "reaction-performance-analytics",
  icon: "fa fa-pie-chart",
  autoEnable: true,
  settings: {
    name: "PerformanceAnalytics"
  },
  registry: [{
    route: "/dashboard/performance_analytics",
    provides: "dashboard",
    workflow: "coreDashboardWorkflow",
    name: "performanceAnalytics",
    label: "Performance Analytics",
    description: "View Actionable Analytics For Your Shop",
    icon: "fa fa-pie-chart",
    priority: 1,
    container: "core",
    template: "performanceAnalytics"
  }, {
    route: "/dashboard/performance_analytics",
    name: "performance_analytics",
    provides: "shortcut",
    label: "Performance Analytics",
    description: "View Actionable Analytics For Your Shop",
    icon: "fa fa-pie-chart",
    priority: 1
  }]
});
