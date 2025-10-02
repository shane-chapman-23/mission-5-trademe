import { useState, useEffect, useRef } from "react";
import Joyride from "react-joyride";
import confetti from "canvas-confetti";
import placeBid from "../../../assets/icons/tut-placebid.svg";
import buyNow from "../../../assets/icons/tut-buynow.svg";
import makeOffer from "../../../assets/icons/tut-makeoffer.svg";

function ListingTutorial({ listing, onHighlightListingChange, onLeadBidChange, onWinBidChange, onShowBidModalChange }) {
  // State variables
  const [run, setRun] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  // Ref for confetti
  const confettiIntervalRef = useRef(null);

  // Steps definition
  const steps = [
    {
      target: 'h1[data-tour="listing"]',
      content: (
        <div>
          <h4 className="font-extrabold text-left">Step 1: View the listing</h4>
          <br />
          <p className="text-left">Look at the photos, read the title and description, check the condition, specs and extras.</p>
        </div>
      ),
      disableBeacon: true,
      showSkipButton: false,
    },
    {
      target: 'div[data-tour="seller"]',
      placement: "left",
      content: (
        <div>
          <h4 className="font-extrabold text-left">Learn about the seller</h4>
          <br />
          <p className="text-left">
            Member have feedback ratings, the higher rating the more successfully completed positive trades. The more stars the more trustworthy the
            seller.
          </p>
        </div>
      ),
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'button[data-tour="watchlist"]',
      content: (
        <div>
          <h4 className="font-extrabold text-left">Step 2: Save to Wathclist</h4>
          <br />
          <p className="text-left">Not ready to act? Click Add to Watchlist to save the listing and get updates.</p>
        </div>
      ),
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="question"]',
      placement: "top",
      content: (
        <div>
          <h4 className="font-extrabold text-left">Step 2: Save to Wathclist</h4>
          <br />
          <p className="text-left">Make sure you are have all the information you need before buying.</p>
          <br />
          <p className="text-left">
            Sellers can answer questions until the listing closes. Its in best interest of seller to provide as much information about their item as
            possible.
          </p>
        </div>
      ),
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="purchase"]',
      placement: "left-start",
      content: (
        <div>
          <h4 className="font-extrabold text-left ml-14">Step 3: Pick your purchase route</h4>
          <br />
          <p className="text-left ml-14">You've got three doors to ownership:</p>
          <br />
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src={placeBid} />
            <p className="text-left">
              <span className="text-[#4854D3] font-extrabold">Place a Bid - </span>Join the battle and outbid others.
            </p>
          </div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src={buyNow} />
            <p className="text-left">
              <span className="text-[#4854D3] font-extrabold">Buy Now - </span>Skip the fight, claim it instantly.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={makeOffer} />
            <p className="text-left">
              <span className="text-[#4854D3] font-extrabold">Make an offer - </span>Make an offer - Try your luck and see if the seller accepts your
              deal.
            </p>
          </div>
        </div>
      ),
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'button[data-tour="bid"]',
      placement: "left",
      content: "Click here to place a bid.",
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="enterBid"]',
      placement: "left",
      content: "Enter your bid here.",
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="currentBid"]',
      placement: "left-start",
      content: "When you have placed your bid, It should say here that you are leading the bid. ",
      showSkipButton: false,
      hideBackButton: true,
    },
    {
      target: 'div[data-tour="winBid"]',
      placement: "left-start",
      content: (
        <div>
          <h4 className="font-extrabold text-left">If you win the auction, the item is yours!</h4>
          <br />
          <p className="text-left">You will receive an email to guide you on payment and delivery options.</p>
          <br />
          <p className="text-left">Any more questions, head to our Help page.</p>
        </div>
      ),
      hideBackButton: true,
    },
  ];

  // Start tour function
  const startTour = () => {
    setShowModal(false);
    setRun(true);
  };

  // Confetti animation function
  const startConfettiAnimation = () => {
    const duration = 60 * 60 * 1000,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 500, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    confettiIntervalRef.current = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(confettiIntervalRef.current);
      }

      const particleCount = 30 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

  // Cleanup for confetti
  useEffect(() => {
    return () => {
      if (confettiIntervalRef.current) {
        clearInterval(confettiIntervalRef.current);
      }
    };
  }, []);

  // Effect to manage body scrolling
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      {/* Welcome Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg py-19 w-[30%] h-auto ] px-6">
            <p className="mt-3 text-base text-gray-600 text-center font-bold">You're one step closer to bidding like a pro!</p>
            <div className="mt-10 flex gap-3 justify-center">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm rounded border cursor-pointer">
                Dismiss
              </button>
              <button onClick={startTour} className="px-4 py-2 text-sm rounded bg-[#007ACD] text-white cursor-pointer">
                Begin tutorial
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Joyride component */}
      <Joyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        stepIndex={stepIndex}
        locale={{
          nextLabelWithProgress: "Next",
          last: "End Tutorial",
        }}
        styles={{
          options: {
            primaryColor: "#4f46e5",
            zIndex: 8000,
          },
          tooltip: {
            borderRadius: 6,
            width: "450px",
            minWidth: "380px",
          },
          tooltipContent: {
            padding: "12px",
            color: "#000000",
          },
          tooltipFooter: {
            display: "flex",
            justifyContent: "center",
            marginTop: 15,
          },
          tooltipFooterSpacer: {
            flex: 0,
          },
          buttonNext: {
            backgroundColor: "#FFC041",
            color: "#A8520C",
            fontSize: "12px",
            fontWeight: "400",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            width: "112.84px",
            alignItems: "center",
            top: "224px",
            marginTop: "30px",
          },
        }}
        callback={(data) => {
          const { status, type, index, action } = data;

          if (type === "step:before") {
            onHighlightListingChange(index === 0);
            onLeadBidChange(index === 7);
            onWinBidChange(index === 8);

            // Start confetti animation when entering the last step
            if (index === 8) {
              startConfettiAnimation();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }

            if (index === 5) {
              onShowBidModalChange(false);
            }
          }

          // Handle normal step progression
          if (type === "step:after") {
            // For normal steps, just advance to the next index
            if (index !== 5) {
              setStepIndex(index + 1);
            }
            // Special handling for step 6 (index 5)
            else {
              // After clicking the bid button in step 6
              onShowBidModalChange(true);

              // Stop the tour temporarily
              setRun(false);

              // Give modal time to render, then advance to step 7
              setTimeout(() => {
                setStepIndex(6); // Set to step 7 (index 6)
                setRun(true); // Restart the tour
              }, 600);
            }
          }

          // Handle step 7 to step 8 transition
          if (index === 6 && type === "step:after") {
            // Temporarily pause the tour
            setRun(false);

            // Set leadBid state
            onLeadBidChange(true);

            // Give time for the component to re-render
            setTimeout(() => {
              setStepIndex(7); // Advance to step 8
              setRun(true); // Resume tour
            }, 600);
          }

          // Handle step 8 to step 9 transition
          if (index === 7 && type === "step:after") {
            // Temporarily pause the tour
            setRun(false);

            // Set winBid state
            onLeadBidChange(false);
            onWinBidChange(true);

            // Give time for the component to re-render
            setTimeout(() => {
              setStepIndex(8); // Advance to step 9
              setRun(true); // Resume tour
            }, 600);
          }

          if (["finished", "skipped"].includes(status)) {
            onHighlightListingChange(false);
            onShowBidModalChange(false);
            setRun(false);
            onLeadBidChange(false);
            onWinBidChange(false);
            setStepIndex(0); // Reset index

            // Clear confetti interval when tour ends
            if (confettiIntervalRef.current) {
              clearInterval(confettiIntervalRef.current);
            }
          }

          // Close modal after completing step 8
          if (index === 7) {
            onShowBidModalChange(false);
          }
        }}
      />
    </>
  );
}

export default ListingTutorial;
