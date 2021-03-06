import { Button, Dropdown, Menu } from 'antd'
import React, { ReactElement, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { toastApolloError } from 'src/apollo/error'
import MenuCard from 'src/components/MenuCard'
import PageHead from 'src/components/PageHead'
import { MenuOrderBy, useMenusByTownAndCategoryQuery } from 'src/graphql/generated/types-and-hooks'
import useInfiniteScroll from 'src/hooks/useInfiniteScroll'
import HomeLayout from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { currentTown } from 'src/models/recoil'
import { Padding } from 'src/styles'
import AllMenusIcon from 'src/svgs/AllMenusIcon'
import BeverageIcon from 'src/svgs/BeverageIcon'
import BreadIcon from 'src/svgs/BreadIcon'
import BrunchIcon from 'src/svgs/BrunchIcon'
import CakeIcon from 'src/svgs/CakeIcon'
import CoffeeIcon from 'src/svgs/CoffeeIcon'
import CookieIcon from 'src/svgs/CookieIcon'
import MacaronIcon from 'src/svgs/MacaronIcon'
import styled, { css } from 'styled-components'

const GridContainerMenu = styled.ul`
  display: grid;
  padding: 1rem 0;
  gap: 1rem;
  background: #fcfcfc;
`

export const OrderButton = styled(Button)`
  padding: 0.3rem 1rem;
  height: fit-content;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
`

const GridContainerCategory = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
  place-items: center center;
  gap: 1rem;
  padding: 1rem;

  background: #fff;

  @media (max-width: 349px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  height: 7rem; // for safari
  cursor: pointer;
`

const NotSelected = css`
  font-weight: normal;
  color: #8e8e8e;
`

const SelectableH4 = styled.h4<{ selected?: boolean }>`
  ${(p) => !p.selected && NotSelected}
`

const limit = 4
const description = ''

function getOrderBy(key?: MenuOrderBy) {
  switch (key) {
    case MenuOrderBy.Name:
      return '?????????'
    case MenuOrderBy.Price:
      return '?????????'
    default:
      return '?????????'
  }
}

function getLastValue(key?: MenuOrderBy) {
  switch (key) {
    case MenuOrderBy.Name:
      return 'name'
    case MenuOrderBy.Price:
      return 'price'
    default:
      return 'id'
  }
}

export default function MenusPage() {
  const townName = useRecoilValue(currentTown)
  const [hasMoreData, setHasMoreData] = useState(true)
  const [category, setCategory] = useState('')
  const [orderBy, setOrderBy] = useState<MenuOrderBy>()

  // ????????? ??????
  const { data, loading, fetchMore } = useMenusByTownAndCategoryQuery({
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      toastApolloError(error)
      setHasMoreData(false)
    },
    skip: !townName,
    variables: {
      ...(category && { category }),
      ...(orderBy && {
        order: {
          by: orderBy,
        },
      }),
      pagination: { limit },
      town: townName,
    },
  })

  const menus = data?.menusByTownAndCategory

  // ?????? ?????????
  const infiniteScrollRef = useInfiniteScroll({
    hasMoreData,
    onIntersecting: async () => {
      if (menus && menus.length > 0) {
        const lastMenu = menus[menus.length - 1]
        const response = await fetchMore({
          variables: {
            pagination: {
              lastId: lastMenu.id,
              ...(orderBy && { lastValue: lastMenu[getLastValue(orderBy)] }),
              limit,
            },
          },
        }).catch(() => setHasMoreData(false))

        if (response?.data.menusByTownAndCategory?.length !== limit) setHasMoreData(false)
      }
    },
  })

  // ????????????
  function updateCategory(e: any) {
    if (!loading) {
      const clickedCategory = e.currentTarget.children[1].textContent

      if (clickedCategory === '??????' || category.includes(clickedCategory)) {
        setCategory('')
      } else {
        setCategory(clickedCategory)
      }
      setHasMoreData(true)
    }
  }

  // ??????
  function updateOrderBy(menuItem: any) {
    setOrderBy(menuItem.key)
    setHasMoreData(true)
  }

  return (
    <PageHead title={`${townName} ?????? - ??????`} description={description}>
      <GridContainerCategory>
        <FlexContainerColumn onClick={updateCategory}>
          <AllMenusIcon selected={category.length === 0} />
          <SelectableH4 selected={category.length === 0}>??????</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategory}>
          <BeverageIcon selected={category.includes('??????')} />
          <SelectableH4 selected={category.includes('??????')}>??????</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategory}>
          <BreadIcon selected={category.includes('????????????')} />
          <SelectableH4 selected={category.includes('????????????')}>????????????</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategory}>
          <BrunchIcon selected={category.includes('?????????')} />
          <SelectableH4 selected={category.includes('?????????')}>?????????</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategory}>
          <CakeIcon selected={category.includes('?????????')} />
          <SelectableH4 selected={category.includes('?????????')}>?????????</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategory}>
          <CoffeeIcon selected={category.includes('??????')} />
          <SelectableH4 selected={category.includes('??????')}>??????</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategory}>
          <CookieIcon selected={category.includes('????????????')} />
          <SelectableH4 selected={category.includes('????????????')}>????????????</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategory}>
          <MacaronIcon selected={category.includes('?????????')} />
          <SelectableH4 selected={category.includes('?????????')}>?????????</SelectableH4>
        </FlexContainerColumn>
      </GridContainerCategory>

      <Padding>
        <Dropdown
          disabled={loading}
          overlay={
            <Menu onClick={updateOrderBy} style={{ textAlign: 'center' }}>
              <Menu.Item key="">
                <div>?????????</div>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key={MenuOrderBy.Name}>
                <div>?????????</div>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key={MenuOrderBy.Price}>
                <div>?????????</div>
              </Menu.Item>
            </Menu>
          }
          placement="bottomCenter"
          trigger={['click']}
        >
          <OrderButton>{getOrderBy(orderBy)}</OrderButton>
        </Dropdown>

        {menus ? (
          <GridContainerMenu>
            {menus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </GridContainerMenu>
        ) : (
          !loading && <div>????????? ?????????</div>
        )}

        {loading && <div>loading...</div>}
        {!loading && hasMoreData && <div ref={infiniteScrollRef}>?????? ?????????</div>}
      </Padding>
    </PageHead>
  )
}

MenusPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <HomeLayout>{page}</HomeLayout>
    </NavigationLayout>
  )
}
