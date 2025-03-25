import  {Button}  from "@/components/ui/button"
export default function Header() {
  return (
    <div className="gap-2 flex items-center justify-between absolute inset-x-0 top-5
    " >
      <div className="pl-15">
        <Button variant="customSecondary">VISITEO</Button>
      </div>
      <div className="pr-15">
        <Button variant="customSecondary">Войти/Профиль</Button>
      </div>
    </div>    
  )
}