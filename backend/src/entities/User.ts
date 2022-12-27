import { Column, CreateDateColumn, UpdateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm"
import Comment from "./Comment"
import Vehicle from "./Vehicle"
import Offers from "./Offers"

@Entity("users")
@Unique(["email"])
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    celphone: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    is_active: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(type => Vehicle, vehicle => vehicle.user, {
        eager: true
    })
    vehicles: Vehicle[]

    @OneToMany(type => Comment, comment => comment.user, {
        eager: true
    })
    comments: Comment[]

    @OneToMany(type => Offers, offer => offer.vehicle, {
        eager: true
    })
    offers: Offers[]

}

export default User;