function ProductDescription() {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
        Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum
          iste natus delectus eaque assumenda illum, harum pariatur in omnis.
          Voluptatem culpa velit ea vel, doloremque labore ipsam numquam
          cupiditate doloribus, debitis, dolorem placeat! Molestiae quos nam est
          accusantium cum ullam porro consequatur asperiores fuga culpa delectus
          exercitationem neque, consequuntur magni odit, ea nulla libero.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus commodi
          maxime dicta eos quasi fuga, nemo ipsam sequi error aspernatur cumque
          asperiores?
        </p>
      </div>
    </div>
  );
}

export default ProductDescription;
