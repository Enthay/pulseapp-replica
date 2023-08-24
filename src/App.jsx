import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./layouts/Main";
import { CustomerStory } from "./pages/CustomerStory";
import { Error } from "./pages/Error";
import { Features } from "./pages/Features";
import { Homepage } from "./pages/HomePage";
import { Pricing } from "./pages/Pricing";
import { SignUp } from "./pages/SignUp";
import { BlogLayouts } from "./layouts/BlogLayouts";
import { CasamirDetails } from "./components/customer stories/CasamirDetails";
import { ValonDetails } from "./components/customer stories/ValonDetails";
import { CarlDetails } from "./components/customer stories/CarlDetails";
import { BureauDetails } from "./components/customer stories/BureauDetails";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog_pages/Blog";
import { Blog2 } from "./pages/Blog_pages/Blog2";
import { Blog3 } from "./pages/Blog_pages/Blog3";
import { Blog4 } from "./pages/Blog_pages/Blog4";
import { Blog5 } from "./pages/Blog_pages/Blog5";
import { Redirect } from "./pages/Blog_pages/Redirect";
import { New } from "./pages/Category_pages/news/New";
import { NewsDetails } from "./pages/Category_pages/news/NewsDetails";
import { BusinessDetails } from "./pages/Category_pages/business/BusinessDetails";
import { Business } from "./pages/Category_pages/business/Business";
import { ProTips } from "./pages/Category_pages/pro_tips/ProTips";
import { Protips1 } from "./pages/Category_pages/pro_tips/Protips1";
import { Protips2 } from "./pages/Category_pages/pro_tips/Protips2";
import { Protips3 } from "./pages/Category_pages/pro_tips/Protips3";
import { Protips9 } from "./pages/Category_pages/pro_tips/Protips9";
import { Protips8 } from "./pages/Category_pages/pro_tips/Protips8";
import { Protips7 } from "./pages/Category_pages/pro_tips/Protips7";
import { Protips6 } from "./pages/Category_pages/pro_tips/Protips6";
import { Protips5 } from "./pages/Category_pages/pro_tips/Protips5";
import { Protips4 } from "./pages/Category_pages/pro_tips/Protips4";
import { SmallBusiness } from "./pages/Category_pages/small_business/SmallBusiness";
import { Smallbusiness1 } from "./pages/Category_pages/small_business/Smallbusiness1";
import { Smallbusiness2 } from "./pages/Category_pages/small_business/Smallbusiness2";
import { Smallbusiness3 } from "./pages/Category_pages/small_business/Smallbusiness3";
import { Smallbusiness4 } from "./pages/Category_pages/small_business/Smallbusiness4";
import { Smallbusiness5 } from "./pages/Category_pages/small_business/Smallbusiness5";
import { Smallbusiness6 } from "./pages/Category_pages/small_business/Smallbusiness6";
import { Smallbusiness7 } from "./pages/Category_pages/small_business/Smallbusiness7";
import { Smallbusiness8 } from "./pages/Category_pages/small_business/Smallbusiness8";
import { Smallbusiness9 } from "./pages/Category_pages/small_business/Smallbusiness9";
import { Smallbusiness10 } from "./pages/Category_pages/small_business/Smallbusiness10";
import { Smallbusiness11 } from "./pages/Category_pages/small_business/Smallbusiness11";
import { Smallbusiness12 } from "./pages/Category_pages/small_business/Smallbusiness12";
import { Smallbusiness13 } from "./pages/Category_pages/small_business/Smallbusiness13";
import { SmallBusinessPage2 } from "./pages/Category_pages/small_business/SmallBusinessPage2";
import { Entrepreneurship } from "./pages/Category_pages/entrepreneurship/Entrepreneurship";
import { Entrepreneurship1 } from "./pages/Category_pages/entrepreneurship/Entrepreneurship1";
import { Entrepreneurship2 } from "./pages/Category_pages/entrepreneurship/Entrepreneurship2";
import { Entrepreneurship3 } from "./pages/Category_pages/entrepreneurship/Entrepreneurship3";
import { Entrepreneurship4 } from "./pages/Category_pages/entrepreneurship/Entrepreneurship4";
import { CashFlowBasics } from "./pages/Category_pages/cash_flow_basics/CashFlowBasics";
import { CashFlow1 } from "./pages/Category_pages/cash_flow_basics/CashFlow1";
import { CashFlow2 } from "./pages/Category_pages/cash_flow_basics/CashFlow2";
import { CashFlow3 } from "./pages/Category_pages/cash_flow_basics/CashFlow3";
import { CashFlow4 } from "./pages/Category_pages/cash_flow_basics/CashFlow4";
import { CashFlow5 } from "./pages/Category_pages/cash_flow_basics/CashFlow5";
import { CashFlow6 } from "./pages/Category_pages/cash_flow_basics/CashFlow6";
import { CashFlow7 } from "./pages/Category_pages/cash_flow_basics/CashFlow7";
import { Survive } from "./pages/Category_pages/survive&thrive/Survive";
import { Survive1 } from "./pages/Category_pages/survive&thrive/Survive1";
import { Survive2 } from "./pages/Category_pages/survive&thrive/Survive2";
import { Survive3 } from "./pages/Category_pages/survive&thrive/Survive3";
import { Survive4 } from "./pages/Category_pages/survive&thrive/Survive4";
import { Survive5 } from "./pages/Category_pages/survive&thrive/Survive5";
import { Hustle } from "./pages/Category_pages/hustle&cash_flow/Hustle";
import { Hustle1 } from "./pages/Category_pages/hustle&cash_flow/Hustle1";
import { Hustle2 } from "./pages/Category_pages/hustle&cash_flow/Hustle2";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
        errorElement: <Error />
      },
      {
        path: "features",
        element: <Features />
      },
      {
        path: "customer-stories",
        element: <CustomerStory />
      },
      {
        path: "customer-stories/case-study-realtyninja",
        element: <CasamirDetails />
      },
      {
        path: "customer-stories/case-study-boldunderline",
        element: <ValonDetails />
      },
      {
        path: "customer-stories/case-study-ngen-works",
        element: <CarlDetails />
      },
      {
        path: "customer-stories/case-study-bureau-of-digital",
        element: <BureauDetails />
      },
      {
        path: "pricing",
        element: <Pricing />
      },
      {
        path: "blog",
        element: <BlogLayouts />,
        children: [
          {
            index: true,
            element: <Blog />
          },
          {
            path: "page/1",
            element: <Redirect />
          },
          {
            path: "page/2",
            element: <Blog2 />
          },
          {
            path: "page/3",
            element: <Blog3 />
          },
          {
            path: "page/4",
            element: <Blog4 />
          },
          {
            path: "page/5",
            element: <Blog5 />
          }
        ]
      },
      {
        path: "category/news",
        element: <New />
      },
      {
        path: "blog/10-ways-to-sabotage-your-business",
        element: <NewsDetails />
      },
      {
        path: "category/business",
        element: <Business />
      },
      {
        path: "blog/streamline-your-operations-for-success-how-jonathan-saeidian-went-from-2-000-to-a-7-figure-business",
        element: <BusinessDetails />
      },
      {
        path: "category/pro-tips",
        element: <ProTips />
      },
      {
        path: "blog/5-steps-to-optimizing-a-services-business-from-brogan-renshaw-founder-of-firewire-digital",
        element: <Protips1 />
      },
      {
        path: "blog/how-ryan-david-of-we-buy-houses-pennsylvania-launched-and-grew-his-business",
        element: <Protips2 />
      },
      {
        path: "blog/how-agencies-can-adopt-subscription-models-for-predictable-cash-flow",
        element: <Protips3 />
      },
      {
        path: "blog/ways-business-owners-can-use-cash-flow-projection-to-scale-growth",
        element: <Protips4 />
      },
      {
        path: "blog/never-use-quickbooks-and-spreadsheets-for-cash-flow",
        element: <Protips5 />
      },
      {
        path: "blog/using-pulse-to-track-actuals-alongside-projections",
        element: <Protips6 />
      },
      {
        path: "blog/using-cash-flow-scenarios-for-decisions-in-pulse",
        element: <Protips7 />
      },
      {
        path: "blog/color-coding-projected-income-and-expenses",
        element: <Protips8 />
      },
      {
        path: "blog/why-your-startup-needs-pulse-for-cash-management",
        element: <Protips9 />
      },
      {
        path: "category/small-business",
        element: <SmallBusiness />
      },
      {
        path: "category/small-business/page/2",
        element: <SmallBusinessPage2 />
      },
      {
        path: "blog/5-cash-flow-tips-and-business-insights-for-self-employed-millennials-from-justin-green-cfp",
        element: <Smallbusiness1 />
      },
      {
        path: "blog/balancing-your-side-hustle-and-full-time-gig-how-greg-marano-juggles-teaching-and-freelancing",
        element: <Smallbusiness2 />
      },
      {
        path: "blog/big-goals-and-basic-cash-flow-how-isaac-mashman-built-his-top-rated-pr-firm",
        element: <Smallbusiness3 />
      },
      {
        path: "blog/growing-a-consultancy-agency-with-ecommerce-consultant-sam-waldman-of-goodz",
        element: <Smallbusiness4 />
      },
      {
        path: "blog/3-cash-flow-tips-for-fintech-startups-how-to-support-your-finance-team-and-foster-growth",
        element: <Smallbusiness5 />
      },
      {
        path: "blog/4-ways-small-businesses-can-connect-with-consumers-during-covid-19-beyond",
        element: <Smallbusiness6 />
      },
      {
        path: "blog/8-invoicing-tips-to-maximize-cash-flow-for-your-small-business",
        element: <Smallbusiness7 />
      },
      {
        path: "blog/overcoming-seasonal-fluctuations-in-your-small-business",
        element: <Smallbusiness8 />
      },
      {
        path: "blog/new-years-resolution-understand-your-cash-flow",
        element: <Smallbusiness9 />
      },
      {
        path: "blog/5-ways-to-spend-less-and-make-more",
        element: <Smallbusiness10 />
      },
      {
        path: "blog/three-quick-tips-for-growing-your-online-business",
        element: <Smallbusiness11 />
      },
      {
        path: "blog/the-five-most-important-budget-line-items-for-creative-agencies",
        element: <Smallbusiness12 />
      },
      {
        path: "blog/four-cash-flow-bedtime-stories-to-help-you-sleep-better-at-night",
        element: <Smallbusiness13 />
      },
      {
        path: "category/entrepreneurship",
        element: <Entrepreneurship />
      },
      {
        path: "blog/monetizing-a-network-how-jodi-brandstetter-started-her-second-business",
        element: <Entrepreneurship1 />
      },
      {
        path: "blog/starting-a-services-business-tips-from-writer-nicole-rollender-of-strand-writing-services",
        element: <Entrepreneurship2 />
      },
      {
        path: "blog/milestone-one",
        element: <Entrepreneurship3 />
      },
      {
        path: "blog/startups-need-cash-flow-projections",
        element: <Entrepreneurship4 />
      },
      {
        path: "category/cash-flow-basics",
        element: <CashFlowBasics />
      },
      {
        path: "blog/startup-success-fundraising-and-cash-flow-with-very-good-security",
        element: <CashFlow1 />
      },
      {
        path: "blog/why-monitoring-cash-flow-is-like-working-out",
        element: <CashFlow2 />
      },
      {
        path: "blog/the-cost-vs-cash-flow-conundrum",
        element: <CashFlow3 />
      },
      {
        path: "blog/7-questions-for-better-cash-flow",
        element: <CashFlow4 />
      },
      {
        path: "blog/what-is-cash-flow-projection",
        element: <CashFlow5 />
      },
      {
        path: "blog/cashflow-the-lifeblood-of-your-business",
        element: <CashFlow6 />
      },
      {
        path: "blog/four-tips-for-managing-your-startups-burn-rate",
        element: <CashFlow7 />
      },
      {
        path: "category/survive-thrive",
        element: <Survive />
      },
      {
        path: "blog/growth-in-a-downturn-how-arash-fayz-of-la-tutoring-pivoted-after-an-80-client-drop",
        element: <Survive1 />
      },
      {
        path: "blog/4-tips-on-optimizing-your-second-draw-ppp-check",
        element: <Survive2 />
      },
      {
        path: "blog/how-to-quickly-add-ecommerce-to-your-business-strategy",
        element: <Survive3 />
      },
      {
        path: "blog/5-practical-cash-flow-survival-tips-for-your-business-during-coronavirus",
        element: <Survive4 />
      },
      {
        path: "blog/the-6-things-that-can-kill-your-agency-dead",
        element: <Survive5 />
      },
      {
        path: "category/hustle-cash-flow",
        element: <Hustle />
      },
      {
        path: "blog/cash-flow-for-independent-contractors-dont-price-yourself-out",
        element: <Hustle1 />
      },
      {
        path: "blog/solving-human-problems-with-a-robotics-venture-kompaï-robotics",
        element: <Hustle2 />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
  {
    path: "plus",
    element: <SignUp />
  }
]);

function App() {

  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;
