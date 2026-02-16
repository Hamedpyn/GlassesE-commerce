const HelpCard = ({ icon: Icon, bgColor, iconColor, title, description }) => {
    return (
        <div className="xl:max-w-154 lg:flex-row lg:max-w-122 sm:w-auto sm:max-w-155 md:max-w-92.5 py-5 lg:py-6 rounded-xl bg-foreground px-5 flex flex-col gap-4 items-center">
            <div className="flex flex-col relative items-center">
                <span className={`${bgColor} lg:mb-0 mb-7 lg:ml-7 w-23.5 h-13 lg:w-14 lg:h-23.5 rounded-full`} />
                <Icon
                    className={`z-50 absolute top-6.75 lg:right-7.5 ${iconColor} text-5xl`}
                    aria-hidden="true"
                />
            </div>
            <div className="flex mt-3! lg:mt-0! lg:mr-4! flex-col gap-4 lg:items-start items-center">
                <h4 className="font-heading text-theme lg:text-lg text-center">{title}</h4>
                <p className="text-theme lg:text-base text-center opacity-70 lg:text-start pl-1">
                    {description}
                </p>
            </div>
        </div>
    );
};
export default HelpCard;