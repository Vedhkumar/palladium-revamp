type ServiceCardProps = {
  title: string;
  para: string;
};
function ServiceCard({ title, para }: ServiceCardProps) {
  return (
    <div className="bg-[#0F0F0F] rounded-xl py-5 px-6 text-center ">
      <h4 className="text-white text-xl font-bold mb-3 ">{title}</h4>
      <p className="text-text-white font-light opacity-80">{para}</p>
    </div>
  );
}

export default ServiceCard;
