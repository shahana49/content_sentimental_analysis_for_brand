// Campaign Header Component
const CampaignHeader = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-6">
      <div className="flex items-start">
        <div>
          <div className="flex items-center gap-x-3">
            <img src="/icons/hook.svg" alt="" className="w-5" />

            <h1 className="text-xl font-semibold text-gray-800">
              Sustainable Fashion Awareness
            </h1>
          </div>
          <p className="text-gray-600  mt-3 mb-3">
            A campaign to promote sustainable and eco-friendly fashion choices
            among consumers. We aim to spread awareness about ethical clothing
            brands and encourage responsible shopping habits.
          </p>
          <div className="text-gray-500 text-xs flex items-center space-x-1">
            <span>Last Updated : 30-03-2025</span>
          </div>
          <div className="text-gray-500 text-xs flex items-center space-x-2 mt-2">
            <span>• Twitter</span>
            <span>• Instagram</span>
            <span>• Website</span>
            <span>• Blog</span>
            <span>• Reddit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;
