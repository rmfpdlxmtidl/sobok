import { HeartOutlined, HeartTwoTone } from '@ant-design/icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PageHead from 'src/components/PageHead'
import { useStoreMenuQuery } from 'src/graphql/generated/types-and-hooks'

const description = ''

export default function StoreMenuPage() {
  const router = useRouter()

  const storeId = (router.query.id ?? '') as string
  const menuName = (router.query.menuName ?? '') as string

  const { data, loading } = useStoreMenuQuery({
    skip: !storeId || !menuName,
    variables: { storeId, menuName },
  })

  const menu = data?.menuByName
  const store = menu?.store
  const storeName = store?.name ?? '매장'

  return (
    <PageHead title={`${storeName} ${menuName ?? '메뉴'} - 소복`} description={description}>
      <div>매장 메뉴 상세 페이지</div>
      <Image
        src={menu?.imageUrls?.[0] ?? '/images/default-store-cover.png'}
        alt="menu-cover"
        width="300"
        height="300"
        objectFit="cover"
      />
      {loading ? (
        <div>loading</div>
      ) : menu ? (
        <>
          <div>{menu.name}</div>
          <div>{menu.price}</div>
          <div>{menu.isLiked ? <HeartTwoTone twoToneColor="#ff9f74" /> : <HeartOutlined />}</div>
          <div>{menu.isSoldOut ? '품절' : '판매 중'}</div>
        </>
      ) : (
        <div>메뉴가 없어요..?</div>
      )}
    </PageHead>
  )
}
