import Image from 'next/image'

export const Logo = () => {
  return (
    <div className=" pt-8 pl-4 pb-7 flex items-center gap-x-3">
      <Image src="/mascot.svg" width={40} height={40} alt="lingo logo" />
      <h1 className=" text-2xl font-extrabold text-green-600 tracking-wider">
        Lingo
      </h1>
    </div>
  )
}
