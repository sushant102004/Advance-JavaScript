class PublicVsPrivate {
    public(){
        console.log('This is a public function.')
    }

    #protected() {
        console.log('This is a protected function.')
    }
}

const obj = new PublicVsPrivate()
obj.public()
obj.protected()