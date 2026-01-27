import { Users, Store } from "lucide-react";

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Decorative Line connection */}
      <div className="absolute top-0 left-1/2 h-24 w-px -translate-x-1/2 bg-linear-to-b from-transparent to-gray-200"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-32">
          {/* Graphic Element */}
          <div className="relative flex h-[320px] w-[320px] shrink-0 items-center justify-center">
            {/* Orbital Rings */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border border-gray-100"></div>
            <div className="absolute inset-8 animate-[spin_25s_linear_infinite_reverse] rounded-full border border-gray-100"></div>
            <div className="absolute inset-16 animate-[spin_30s_linear_infinite] rounded-full border border-gray-50"></div>

            {/* Central Node */}
            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-gray-50 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <div className="rounded-full bg-[#E6FAFA] p-5">
                <Store className="h-10 w-10 text-[#00BAC7]" />
              </div>
            </div>

            {/* Decor Dots/Icons on Orbit */}
            <div className="animate-bounce-slow absolute top-1/4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-50 bg-white shadow-lg">
              <div className="h-3 w-3 rounded-full bg-[#34D9D9]"></div>
            </div>
            <div className="absolute bottom-6 left-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-50 bg-white shadow-lg">
              <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-lg text-center lg:text-left">
            <div className="mb-8 inline-flex items-center justify-center rounded-2xl bg-blue-50 p-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900">Đơn giản cho mọi đối tượng</h2>
            <p className="text-xl leading-relaxed text-gray-500">
              Giao diện hiện đại trực quan, loại bỏ các thao tác thừa. Thân thiện cho cả HR chuyên
              nghiệp và nhân viên phổ thông.
            </p>
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <div className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
                Dễ sử dụng
              </div>
              <div className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
                Không cần đào tạo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
