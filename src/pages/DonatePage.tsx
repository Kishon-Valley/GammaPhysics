import { Heart, Coffee, Star, DollarSign } from 'lucide-react';
import { useState } from 'react';

export function DonatePage() {
  // Buy Me a Coffee URL
  const buyMeCoffeeUrl = 'https://www.buymeacoffee.com/lmtsoftware';
  const [customAmount, setCustomAmount] = useState<number>(10);

  const donationTiers = [
    {
      title: "Buy us a coffee",
      amount: 5,
      icon: Coffee,
      description: "Help keep our developers caffeinated!",
      perks: ["Support ongoing development"]
    
    },

    {
      title: "Silver supporter", 
      amount: 25,
      icon: Star,
      description: "Become a valued supporter of GammaPhysics",
      perks: ["Support ongoing development", "Our eternal gratitude", "Access to supporter updates"]
    }
  ];

  // Function to redirect to Buy Me a Coffee
  const redirectToBuyMeCoffee = () => {
    window.open(buyMeCoffeeUrl, '_blank');
  };

  return (
    <div className="px-4 py-12 min-h-screen bg-gray-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Heart className="mx-auto w-12 h-12 text-red-500" />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">Support GammaPhysics</h1>
          <p className="mt-2 text-xl text-gray-600">
            Help us make physics education accessible to everyone
          </p>
        </div>

        {/* Main donation options - side by side layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-16">
          {/* Donation tiers */}
          {donationTiers.map((tier, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                    {<tier.icon className="w-6 h-6 text-blue-600" />}
                  </div>
                  <h3 className="ml-3 text-xl font-medium text-gray-900">{tier.title}</h3>
                </div>
                
                <p className="mt-4 text-2xl font-semibold text-gray-900">
                  ${tier.amount}
                </p>
                <p className="mt-4 text-gray-600">{tier.description}</p>
                
                <ul className="mt-6 space-y-2">
                  {tier.perks.map((perk, perkIndex) => (
                    <li key={perkIndex} className="flex items-center text-gray-600">
                      <DollarSign className="mr-2 w-4 h-4 text-green-500" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={redirectToBuyMeCoffee}
                  className="flex justify-center items-center px-4 py-3 mt-8 w-full text-[#000000] bg-[#FFDD00] rounded-md border border-transparent shadow-sm hover:bg-[#FFCC00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFDD00]"
                >
                  {<tier.icon className="mr-2 w-5 h-5" />}
                  {tier.amount === 5 ? "Support us on Buy Me a Coffee" : `Donate $${tier.amount}`}
                </button>
              </div>
            </div>
          ))}

          {/* Custom donation section */}
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Custom Donation</h3>
              </div>
              
              <p className="text-gray-700 mb-5">
                Select a custom amount to support GammaPhysics
              </p>
              
              {/* Preset amount buttons */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[15, 25, 50].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setCustomAmount(amount)}
                    className={`py-2 px-3 rounded-md border ${
                      customAmount === amount
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <div className="relative w-full md:w-64">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <DollarSign className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Math.max(1, parseInt(e.target.value) || 0))}
                    className="block w-full pl-10 pr-3 py-2.5 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Other amount"
                  />
                </div>
                <button
                  onClick={() => redirectToBuyMeCoffee()}
                  className="flex justify-center items-center px-6 py-2.5 w-full md:w-auto text-[#000000] bg-[#FFDD00] rounded-md border border-transparent shadow-sm hover:bg-[#FFCC00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFDD00]"
                >
                  <Coffee className="mr-2 w-5 h-5" />
                  Donate ${customAmount}
                </button>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Your donation helps us:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <DollarSign className="mr-2 w-4 h-4 text-green-500 mt-0.5" />
                    <span>Maintain and improve GammaPhysics for students worldwide</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <DollarSign className="mr-2 w-4 h-4 text-green-500 mt-0.5" />
                    <span>Create accurate, accessible physics educational content</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <DollarSign className="mr-2 w-4 h-4 text-green-500 mt-0.5" />
                    <span>Develop new interactive learning tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 mt-16 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Where Your Support Goes</h3>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Coffee className="w-6 h-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">Development</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Supporting ongoing development and maintenance of GammaPhysics
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Star className="w-6 h-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">New Features</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Funding new features and improvements
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">Community</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Building and supporting our learning community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}